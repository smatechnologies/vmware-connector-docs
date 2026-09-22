---
sidebar_label: 'Installation overview'
title: Installation overview
description: "Overview of the VMWare Connector installation and configuration tasks, including supported operations and the sub-types available in Enterprise Manager and Solution Manager."
tags:
  - Conceptual
  - System Administrator
  - Installation
---

# Installation overview

## What is it?

This section covers everything you need to install and configure the VMWare Connector so OpCon can automate operations against VMWare. The connector communicates with VMWare web services (vCenter or ESXi 5.5) and runs the operation requested by an OpCon job.

**Who this is for:** System Administrators installing the connector on a Windows machine that already runs the OpCon Windows Agent.

## At a glance

| Step | What you do | Where |
|---|---|---|
| 1 | Install the connector on the target Windows machine | [Installation](installation.md) |
| 2 | Set up the connector in **either** Enterprise Manager **or** Solution Manager | [Installation](installation.md) |
| 3 | Update connector settings (`Connector.config`) | [Configuration](configuration.md) |
| 4 | Define your first VMWare job | [Enterprise Manager job definition](em-job-definition.md) or [Solution Manager job definition](sm-job-definition.md) |

## Choose a sub-type path

The VMWare Connector exposes its job definition through one of two sub-type paths. These paths are alternatives — you do not need to set up both.

| Path | When to use it | Where jobs are defined |
|---|---|---|
| **Enterprise Manager** | Your team defines jobs in the Enterprise Manager desktop interface. | Enterprise Manager, using the **VMWare** Windows job sub-type. |
| **Solution Manager** | You run OpCon 25.0.3 or greater and your team defines jobs in Solution Manager. | Solution Manager, using the **VMWare** job type through the ACS framework. The `Connector.config` file is centralized in OpCon. |

For the step-by-step procedures, refer to [Installation](installation.md).

## Supported operations

The connector supports the following operations on VMWare instances:

| Name | Description |
| ---- | ----------- |
| BackUp | Back up VMWare machine instances. |
| Clone | Create a virtual machine. |
| Delete | Delete a virtual machine from the VMWare environment. Requires configuration and VMWare privileges. |
| Information | Retrieve information from the VMWare environment. |
| PowerOps | Power on or power off VMWare instances; reboot, shut down, restart, or suspend guest operating systems. |
| Reconfigure | Change VMWare configurations by changing the number of CPUs or the memory size. |
| SnapShot | Take a snapshot, delete a snapshot, and revert to a snapshot. |

VMWare Tools must be installed on a virtual machine for these operations to function effectively on it.

## What's in this section

- [Installation](installation.md) — System requirements, the connector install, and the Enterprise Manager and Solution Manager setup paths. Also covers upgrade and silent-mode installs.
- [Configuration](configuration.md) — Reference for `Connector.config`, including connector settings, VMWare connection details, and logging behavior.
