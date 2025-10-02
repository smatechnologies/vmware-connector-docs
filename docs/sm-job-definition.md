# Solution Manager Job Definition

Solution Manager includes a job VMWare to assist with the definition of VMWare jobs. 

## VMWare Job-Type

The VMWare job-type simplifies the job definition process by displaying fields to generate the command line for the different supported VMWare commands.

### Integration Selection

**Integrations or Integration Group**: Defines the VMWare machine that is associated with the connector.

## Task Details

### BACKUP

This section contains the requirements to process an OpCon VMWare BACKUP job which can be used to create an offline backup of a VMWare instance. During the backup process, the VMWare instance will be shutdown, a backup performed and after the backup is complete the VMWare instance will be restarted.

### BACKUP

This section contains the requirements to process an OpCon VMWare BACKUP job which can be used to create an offline backup of a VMWare instance. During the backup process, the VMWare instance will be shutdown, a backup performed and after the backup is complete the VMWare instance will be restarted.


The BACKUP Operation contains the following fields:

**Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
**Virtual Machine Name**: Defines the name of a virtual machine in the target host system to perform the operation on.
**Backup Tasks**: Defines the type of BACKUP task to perform: BACKUPVM.
**Executable or Script**: Defines the backup software executable or script.
**Software Directory**: Defines the directory where the backup executable or script is located.
**Parameters**: Defines parameters that the backup software or script require.
**Return Code**: Defines the return code that the backup software uses to indicate that the backup finished OK.

### CLONE

This section contains the requirements to process an OpCon VMWare CLONE job that is used to perform a clone action to create a virtual machine from an existing VMWare machine or a clone. When creating a machine from an existing machine, the existing machine must be in a powered-off state.



**Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
**Clone Tasks**: Defines the type of CLONE task to perform: CLONEVM.
**Clone From Virtual Machine Name**: Defines the name of the virtual machine to clone from. The virtual machine must be in a powered-off state.
**Cloned Virtual Machine Name**: Defines the name to be given to the new virtual machine.
**Virtual Machine is a Template**: If the virtual machine to clone from is a template, select this checkbox.
**VMWare Host Name**: If the virtual machine is a template, specify the host name on which the virtual machine must be created.

### DELETE

This section contains the requirements to process an OpCon VMWare DELETE job that is used to delete a virtual machine from the VMWare environment. Please note that once the delete command has been processed, the virtual machine is not recoverable as the virtual machine storage will have been removed from the datastore. This function requires the VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED configuration value to be set to True.

**Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
**Delete Tasks**: Defines the type of DELETE task to perform: DELETEVM.
**Virtual Machine Name**: Defines the name of the virtual machine to delete.

### INFORMATION

This section contains the requirements to process an OpCon VMWare INFORMATION job that can be used to produce a report from the VMWare environment.

It is possible to produce a report that includes the list of virtual machines that have been in a powered-off state for a defined number of days.
 
It should be noted that the actual powered-off date is not always available from the virtual machine information, so the initial powered-off date is set when the connector detects that the machine is in a powered-off state. This means that when the task is executed for the first time, no virtual machines will appear in the list as the powered-off date will be set to the current date and the number of powered-off days will not be exceeded.
 
If a virtual machine is on the powered-off list and is powered-up, it is removed from the list.
 
The INFORMATION Operation contains the following fields:

**Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
**Information Tasks**: Defines the type of INFORMATION task to perform:
* **GETPOWEREDOFFLIST**: Retrieves a list of machines that have been powered-off for a time equal to or greater than the number of Powered Off Days.
* **GETSUMMARY**: Retrieves a summary of the Datacenter(s). Includes a list of:
        * Datastores, which include remaining freespace, hosts associated with the datastore, and virtual machines associated with the datastore
        * Hosts, which include virtual machines associated with the host including operating system, status (if a powered-off date), and VMWare tools status
**Powered Off Days**: Used with the GETPOWEREDOFFLIST information and defines how many days the virtual machine must be powered off before it will appear in the report.

### POWEROPS

This section contains the requirements to process an OpCon VMWare POWEROPS job that is used to perform an action on the VMWare server or guest operating system.

The **POWEROPS Operation** tab is used to define VMWare PowerOps functions. The task is selected from the drop-down list and either the name of a single virtual machine is entered in the Virtual Machine Name field or multiple virtual machine names can be added to the Virtual Machine group. It should be noted that the group capability is only supported for POWEROFF, POWERON, SHUTDOWN, and SUSPEND tasks. The Virtual Machine Group option will be disabled if not supported by a PowerOps Task.
 
The POWERUPS Operation contains the following fields:

**Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
**PowerOps Tasks**: Defines the type of POWEROPS task to perform: POWEROFF, POWERON, REBOOT, RESET, SHUTDOWN, STANDBY, or SUSPEND.
**Virtual Machine Name**: Defines the name of a virtual machine in the target host system to perform the operation on. Virtual Machine Name is mutually exclusive with Virtual Machine Group.
**Virtual Machine Group**: Defines a list of virtual machines in the target host to perform the operation on.
    * To add a virtual machine to the list, click on the **+ AddItem** button and enter the name of the virtual machine.
    * To update the name of a virtual machine, update the name in the Virtual Machine List.
    * To remove a virtual machine from list, select the **-** button to the right of the text box.

### RECONFIGURE

This section contains the requirements to process an OpCon VMWare RECONFIGURE job that is used to perform a reconfiguration action on the virtual machine. The RECONFIGURE job can be used to increase or decrease either the number of CPU's or the size of the memory of virtual machine.
 
For dynamic reconfigure changes (CPU & memory), the options must be enabled for the virtual machine(VMWare Settings, Options, Memory/CPU hotplug). It should be noted that these options will only be allowed by VMWare if the target operating system supports dynamic reconfiguration. If dynamic reconfiguration is not supported then the virtual machine must be restarted to implement the configuration change. In some cases operating systems support the dynamic addition of CPUs and memory, but not dynamic removal of these resources.
 
If the guest operating system supports dynamic reconfiguration, these changes will be made automatically. Otherwise, the virtual machine will need to be restarted after the configuration is changed.

The RECONFIGURE Operation contains the following fields:

**Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
**Reconfiguration Tasks**: Defines the type of RECONFIGURE task to perform: CHANGEVM.
**Virtual Machine Name**: Defines the name of a virtual machine in the target host system to perform the operation on.
**Required No of CPUs**: Defines the number of CPUs to set in the configuration.
**Required Memory Size (MB)**: Defines the memory size to set in the configuration. The memory size is defined in MB (e.g., 4096, 8192, etc.).
**Restart Server**: If the virtual machine operating system does not support dynamic configuration, selecting this option will result in the operating system being shut down, the configuration update being performed, and the virtual machine being restarted.

### SNAPSHOT

This section contains the requirements to process an OpCon VMWare SNAPSHOT job that is used to perform a snapshot action on the virtual machine.

The SNAPSHOT Operation contains any of the following fields:

**Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
**SnapShot Tasks**: Defines the type of SNAPSHOT task to perform: CREATE, REMOVE, or REVERT.
**Virtual Machine Name**: Defines the name of a virtual machine in the target host system to perform the operation on.
**Name**: Defines the following, depending on the task being performed:
    * The name of the snapshot to create (SnapShot Tasks CREATE) for the virtual machine defined in the Virtual Machine Name field.
    * The name of an existing snapshot to remove (SnapShot Tasks REMOVE) for the virtual machine defined in the Virtual Machine Name field.
    * The name of the snapshot to revert to (SnapShot Tasks REVERT) for the virtual machine defined in the Virtual Machine Name field.
**Remove Child SnapShots**: Specifies to remove any child snapshots associated with the snapshot when removing a snapshot (SnapShot Tasks REMOVE).
