---
sidebar_label: 'Overview'
title: VMWare Connector overview
description: "Overview of the VMWare Connector, including scope, audience, and supported job submission paths."
tags:
  - Conceptual
  - System Administrator
  - Installation
---

# VMWare Connector overview

## What is it?

The VMWare Connector, version 21.0.1, provides connectivity that allows an OpCon job to submit a request to VMWare. It lets OpCon automate VMWare operations such as backup, clone, power operations, reconfiguration, and snapshots as part of a schedule.

You define VMWare jobs in either of two ways:

- As Windows jobs that use the **VMWare** job sub-type in Enterprise Manager.
- As VMWare jobs that use the **VMWare** job type in Solution Manager.

When OpCon runs the job, the job definition is passed as arguments to the VMWare Connector, which calls the VMWare web services interface.

## Scope

This help provides basic and advanced conceptual and procedural information for running the VMWare Connector. Information about running the central OpCon components is outside the scope of this document. For information about OpCon, refer to **Getting Started with OpCon** in the **Concepts** online help.

## Audience

This help is written for users with a working knowledge of the VMWare web services interface and a basic understanding of automated job scheduling concepts.

## Windows file names

Some systems do not allow long file names (for example, `C:\Program Files\OpConxps\`). To work around this, use the 8.3 file name format. In this format, the seventh character becomes a tilde followed by a `1` (for example, `C:\Progra~1\OpConxps\`).

## Documentation questions or comments

SMA values any questions, concerns, or comments about this online help and its usefulness.

## FAQs

**Where can I define a VMWare job?**

You can define VMWare jobs in either Enterprise Manager (using the Windows job type with the VMWare sub-type) or Solution Manager (using the VMWare job type). For details, refer to [Enterprise Manager job definition](em-job-definition.md) and [Solution Manager job definition](sm-job-definition.md).

**What does the connector do when a job runs?**

When OpCon runs a VMWare job, the job definition is passed as arguments to the VMWare Connector. The connector calls the VMWare web services interface to perform the requested operation.

**What if a Windows path is too long?**

Use the 8.3 file name format. The seventh character of the long name becomes a tilde followed by a `1` (for example, `C:\Progra~1\OpConxps\`).

## Glossary

| Term | Definition |
|---|---|
| VMWare Connector | An OpCon connector that submits job requests to VMWare web services from an OpCon schedule. |
| Enterprise Manager | The legacy Windows-based desktop interface for OpCon. Hosts the VMWare job sub-type plug-in. |
| Solution Manager | The browser-based interface for OpCon. Hosts the VMWare job type through the ACS framework. |
