Smcmembers
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|memberId|Unique ID of the SMC member|int|Yes|Auto generated|-||
|2|firstName|First name of the SMC member|str|Yes|Filled|-||
|3|lastName|Last name of the SMC member|str|Yes|Filled|-||
|4|contactnumber|Contact number of the SMC member|str|Yes|Filled|-||
|5|designation|Chairman, member, member/teacher, member/student, member/ education expert, convenor (school head)|str|Yes|Filled|-||
|6|gender|Gender of the SMC member|str|Yes|Filled|-||
|7|schoolId|School of the SMC member|int|Yes|Filled|-||
|8|studentId|ID of the student related to the SMC member|int|No|Filled|-||
|9|relationtostudent|Relation of the SMC member to the aobve mentioned student |str|No|Master Codes|Relationship Codes||
|10|dateofappointment|Date of appointment of the SMC member|date|Yes|Filled|-||
