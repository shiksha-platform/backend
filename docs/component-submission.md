Component submission
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|ID of the specific student learning record for a particular component in the assessment|str|Yes|Auto generated|-||
|2|studentSubmissionId|ID of the specific student grade learning record for a particular assessment|str|Yes|Foreign Key|-||
|3|componentId|ID of the component for which marks are record (throy, oral, viva etc.)|str|Yes|Foreign Key|-||
|4|score|Marks/ percentage scored by the student in the component|int|Yes|Filled|-||
|5|ispresent|Indication on whether student was present or absent for the assessment|char|Yes|Master Codes|Present Codes||
