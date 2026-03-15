# agentic-n8n · Molt.n8n

**Agentic Elektronic DAOLLC** execution harness  
Forked from n8n · now the sovereign orchestrator for the agent economy

## Mission

We are not building another automation tool.  
We are building the **decentralized will** layer for the agent economy.

Agents run the stores.  
Humans issue commands.  
Communities own the rules.  
Revenue is tokenized and redistributed via $Æ.

This fork transforms n8n into the central harness that:
- Executes fractal code mode loops
- Runs DAGMO maintenance swarms
- Launches & meters æ.store agents
- Bridges to DAOLLC treasury & governance

## Quick Start (self-host)

```bash
# Clone the fork
git clone https://github.com/MYaelMendez/agentic-n8n.git
cd agentic-n8n

# Install
npm install

# Run locally (dev mode)
npm run dev

# Build & start production
npm run build
npm run start
```

Or with Docker (recommended):

```bash
docker-compose up -d
```

Open http://localhost:5678 → welcome to agentic-n8n

## Hello Agent Demo (first workflow)
1. Start the fork (`npm run dev`)
2. Open http://localhost:5678
3. Import workflow from `/examples/hello-agent.json`
4. Execute → see fractal simulation output

## Core Custom Nodes (Phase 0)
- FractalExecutor — LLM writes code → Rust sandbox executes → result feedback loop
- DagmoBountyCreator — Triggers GitHub issue bounties via Worker
- TreasuryBridge — Meters $Æ cost → Safe multisig payout

## Roadmap Highlights
Phase 0 – Foundation (now)  
Phase 1 – Core Harness (next 3 months)  
Phase 2 – æ.store Marketplace (months 3–6)  
Phase 3 – DAO Governance (months 6–9)  
Phase 4 – Molt.school Education (months 9–12)  
Phase 5 – Full Sovereignty (months 12–18)

## Contribute
- Fork & PR custom nodes
- Propose workflows for DAGMO or æ.store agents
- Earn $Æ bounties via DAOLLC governance

Everyone can own the harness.  
🦞🧶🏛️∞