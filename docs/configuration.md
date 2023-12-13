# Configuration

## Agent.config File Configuration

The Agent.config is the VMWare Connector configuration file name. Before configuring your first job to run, you will need to update settings in the Agent.config file. After configuration, you can proceed with defining jobs. For more information, refer to [VMWare Job Definition](VMWare Job Definition).
 
All settings in the configuration file apply to the machine on which the file resides.

### Connector

| CONNECTOR | Description |
| ----------- | ----------- |
 NAME | The name of the connector. <br></br><br></br> This value should not be changed. |
| JOB_OUTPUT_DIRECTORY | The name of the directory where created files will be placed (e.g., ```c:\\<root dir>\\JobOutput\\```). <br></br><br></br> **Note:** The backslash character (```\```) is a special Java character and, if used, should be entered twice (```\\```) (e.g., ```c:\\VMWare\\JobOutput\\)```. Alternatively, the slash (/) character can be used instead (e.g., c:/VMWare/JobOutput/). The directory name must be finished with a trailing \\ or /. |
| DEBUG	 | If the Connector supports a debug mode, it can be used to set the connector into DEBUG mode. <br></br><br></br> Valid values are ON or OFF (default OFF). |

###  VMWare Information

| [VMWARE INFORMATION] | Description |
| -------------------- | ----------- |
| VMWARE_HOST_ADDRESS | Contains the address of the host supporting VMWare web services for the VMWare installation (Supports VCenter or ESXi 5.5). <br></br><br></br> Example: ```https://192.168.192.155/sdk``` |
| VMWARE_USER | The name of a user that has the required privileges to perform the requested operation on the virtual machine. <br></br><br></br> If a Windows user is used, then the user name must be preceded with the domain name and two backslashes (```\\```). <br></br><br></br> Example: ```domain\\user``` |
| VMWARE_USER_PASSWORD | The password associated with the user. <br></br><br></br> The password must be encrypted using the Password Encryption Tool available in the Enterprise Manager Password Update Menu. |
| VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED	 | When set to TRUE and the VMWare User has set the appropriate privileges (VirtualMachine.Inventory.Delete), it will be possible to delete virtual machines from the VMWare inventory. <br></br><br></br> This setting should be used with caution since once the delete has been issued, the virtual machine cannot be recovered. |

:::tip Example 

The following is an example of the Agent.config file:

```
[CONNECTOR]
NAME=VMWare Connector
JOB_OUTPUT_DIRECTORY=c:\\VMWARE\\JobOutput
DEBUG=OFF
 
[VMWARE INFORMATION]
VMWARE_HOST_ADDRESS=https://192.168.192.155/sdk
VMWARE_USER=SMAEUROPE\\VUser
VMWARE_USER_PASSWORD=0744f7165dc3185a5da9cb67147218e3ee9d98c80be73810ee9
d98c80be73810
VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED=False
```

:::

### Logging and Job Output

The default logging implemented by the connector consists of a maximum cycle of five log files. The log files contain information about the connector and any jobs run by the connector. The log files are located in the ```<installation root>\log``` directory.
 
Information is appended into the log files and any error messages, return codes can be viewed in these log files.