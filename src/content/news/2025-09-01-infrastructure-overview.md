---
title: Infrastructure Overview
date: "2025-09-01"
---

Our validator infrastructure is designed with different approaches for each network to optimize for specific operational goals.

## Polkadot Validator

Hosted in a unique location in Southern Switzerland with self-hosted infrastructure. This setup prioritizes independence, decentralization, and control over the full stack.

**Hardware Specifications:**
- CPU: AMD Ryzen 9 9950X3D (8 dedicated cores, SMT disabled)
- Memory: 96GB DDR5 ECC @ 5600MT/s (32GB dedicated to Polkadot VM)
- Storage: ZFS mirrored array with 2× Samsung 990 Pro 4TB NVMe PCIe 4.0
- Network: 10 Gbit/s symmetric, unmetered

## Kusama Validator

Hosted on OVH infrastructure with professional-grade datacenter services. This setup focuses on maximum availability through established hosting providers.

**Hardware Specifications:**
- CPU: Intel Xeon-E 2136 (6c/12t @ 3.3-4.5 GHz)
- Memory: 64GB ECC RAM @ 2666 MHz
- Storage: Soft RAID1 with 2× 1.92TB NVMe SSD
- Network: 500 Mbit/s symmetric, unmetered

## Monitoring

Both validators use dedicated external monitoring systems with 24/7 alerting to ensure operational continuity.
