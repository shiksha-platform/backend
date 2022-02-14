Qualification
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|Primary ID of the Qualification detail|int|Yes|Auto generated|-||
|2|teacherId|ID of the teacher for which qualification is stored|int|Yes|Foreign Key|-||
|3|level|Level of the Qualification (Matriculation, Graduation, Under Graduation)|str|Yes|Master Codes|Qual Level Codes||
|4|percentage|Percentage achieved by teacher during this qualification|double|Yes|Filled|-||
|5|board|Board of the Qualification|str|Yes|Master Codes|Qual Board Codes||
|6|institution|Name of Institution|str|Yes|Filled|-||
|7|month|Month of graduation or clearing that qualification|int|Yes|Filled|-||
|8|year|Year of Graduation/clearing that qualification|int|Yes|Filled|-||
|9|specialisation|Specialisation of the Qualification|str|Yes|Filled|-||
|10|type|Academic or professional|str|Yes|Master Codes|Qual Type Codes||
|11|isHighestQualification|Boolean if the qualification was the highest qualification of teacher|boolean|Yes|Filled|-||
