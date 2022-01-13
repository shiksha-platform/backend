Leaves
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|type|Type of leave being taken (Sick, casual, planned, maternity)|char|Yes|Master Codes|Leave Type Codes||
|2|startDate|Start date of the leave|date|Yes|filled|-||
|3|endDate|End date of the leave|date|Yes|filled|-||
|4|purpose|Reason for leave/ type of leave|char|Yes|Master Codes|Reason codes||
|5|assignedTo|teacherid of teacher the leave has been assigned to|str|Yes|Auto filled|-||
|6|assignedBy|teacherid of teacher/ officer the leave has been approved by |str|Yes|Auto filled|-||
|7|docAttached|Attachment of a medical certificate or some document required along with leave application|boolean|No|Filled|-||
|8|docLink|Link of a medical certificate or some document required along with leave application|str|No|Filled|-||
|9|workingDays|No. of working days between the start date and end date of the leave|int|Yes|Filled|-||
|10|status|Status of the leave (cancelled, approved)|str|Yes|Master Codes|Leave Status Codes||
