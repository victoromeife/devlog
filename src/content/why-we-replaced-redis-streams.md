---
title: "Why we replaced Redis streams with a single Postgres table"
date: "2024-10-24"
readingTime: "4 min read"
category: "Performance"
excerpt: "Evaluating queue ergonomics at 30k events/sec. How SKIP LOCKED, LISTEN/NOTIFY, and zero infrastructure sprawl simplified our operations."
tags: ["postgres", "queues"]
---

For over eighteen months, our ingestion pipeline relied on clustered Redis streams. On paper, it was textbook engineering: in-memory throughput, dedicated consumer groups, and low read contention. In production under real-world deploys, however, reality crept in.

### 01 // Problem I faced

When processing asynchronous payments, our worker nodes occasionally died mid-execution due to Kubernetes pod evictions. Redis streams maintain an internal pending entries list (PEL), but claiming expired locks required a bespoke sweeper runtime.

The sweeper itself periodically produced race conditions during rolling restarts. Multiple worker pods would compete to reclaim stalled entries simultaneously, yielding duplicate webhooks to external payment gateways.

### 02 // What I learned

1. **Boring tech scales farther than you think**  
   Postgres has decades of edge-case hardening. Adding a second storage layer simply because an influencer said “databases aren’t queues” adds massive mental overhead.

2. **SKIP LOCKED is battle-hardened**  
   As long as indexes are lean and partial, row-level locks bypass contention entirely. For workloads under 40,000 events/sec, connection pooling with PgBouncer easily sustains the throughput.

3. **Eliminating network boundaries is the best latency win**  
   The fastest network hop is the one you do not take. Processing transactional state and pipeline events within a single ACID transaction eliminates latency tail-risk.

4. **Single source of truth simplifies DR**  
   Disaster recovery drills became a single command: restoring a PITR backup. There is no longer an out-of-sync cache layer requiring replay scripts or cold-start orchestration.