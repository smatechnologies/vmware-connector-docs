---
sidebar_label: 'Job definition overview'
title: Job definition overview
description: "Overview of the two ways to define a VMWare job in OpCon: the VMWare sub-type in Enterprise Manager and the VMWare job type in Solution Manager."
tags:
  - Conceptual
  - Automation Engineer
  - Jobs
  - Solution Manager
---

# Job definition overview

## What is it?

Once the connector is installed and configured, you create the actual VMWare jobs that OpCon runs. You can define VMWare jobs in two ways:

- As a **Windows** job that uses the **VMWare** sub-type in Enterprise Manager.
- As a **VMWare** job type in Solution Manager.

Both paths expose the same set of VMWare operations. The job definition determines which operation runs and which virtual machine the operation acts on. When OpCon runs the job, the definition is passed as arguments to the VMWare Connector, which calls the VMWare web services interface.

**Who this is for:** Automation Engineers building schedules that include VMWare operations. System Administrators who installed the connector typically hand off to this role.

## Before you start

- The VMWare Connector is installed and configured. Refer to [Installation overview](installation-overview.md).
- You know which sub-type path your environment uses (Enterprise Manager or Solution Manager). Refer to [Choose a sub-type path](installation-overview.md#choose-a-sub-type-path).

## Choose your path

| Path | When to use it | Page |
|---|---|---|
| Enterprise Manager sub-type | You define jobs in the Enterprise Manager desktop client. | [Enterprise Manager job definition](em-job-definition.md) |
| Solution Manager job type | You run OpCon 25.0.3 or greater and define jobs in Solution Manager. | [Solution Manager job definition](sm-job-definition.md) |

## Supported operations

Both job-definition paths expose the same operations:

| Operation | What it does |
|---|---|
| BACKUP | Creates an offline backup of a VMWare instance. |
| CLONE | Creates a virtual machine from an existing machine or template. |
| DELETE | Deletes a virtual machine from the VMWare environment. |
| INFORMATION | Produces a report (powered-off list or datacenter summary) from the VMWare environment. |
| POWEROPS | Performs a power action (power on, power off, reboot, reset, shut down, standby, or suspend). |
| RECONFIGURE | Changes the number of CPUs or the memory size of a virtual machine. |
| SNAPSHOT | Creates, removes, or reverts a virtual machine snapshot. |

For the per-operation field reference, refer to the page that matches your sub-type path.

## What's in this section

- [Enterprise Manager job definition](em-job-definition.md) — Field reference for the VMWare sub-type, the Job Details tab, every operation tab, and the Failure Criteria tab.
- [Solution Manager job definition](sm-job-definition.md) — Field reference for the VMWare job type and the task details for each operation.
