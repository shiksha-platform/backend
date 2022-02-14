Student
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|studentId|Student ID as defined by the state student registry|str|Yes|Auto generated|-||
|2|aadhaar|Aadhaar number of the student|str|No|Registry|||
|3|refStudentId|Student ID as defined by a secondary state database of students/ school registers|str|No|Registry|Brownfield student registry||
|4|firstName|First name of the student|char|Yes|Filled|-||
|5|lastName|Last name of the student|char|Yes|Filled|-||
|6|contactNumber|Most active mobile number of the student|int|Yes|Filled|-|Many students have phones of their own|
|7|email|Most active email address of the student|str|No|Filled|-||
|8|gender|Gender of the student|char|Yes|Master Codes|Gender codes||
|9|socialCategory|Social category of the student as defined by the state for providing benefits|char|No|Master Codes|Category codes||
|10|iscwsn|Special needs of the students as defined by the state for providing benefits|char|No|Master Codes|CWSN codes||
|11|religion|Religion of the student for providing benefits|char|No|Master Codes|Religion codes||
|12|singleGirl|Tagging of the student as single girl child for providing benefits|char|No|Master Codes|Y/N codes||
|13|weight|Weight of the student|int|No|Filled|-||
|14|height|Height of the student|int|No|Filled|-||
|15|bloodGroup|Bloodgroup of the student|char|No|Master Codes|Y/N codes||
|16|birthDate|Date of birth of the student|date|No|Filled|-||
|17|homeless|Tagging of the student as homeless for providing benefits|char|No|Master Codes|Y/N codes||
|18|bpl|Tagging of the student as BPL for providing benefits|char|No|Master Codes|Y/N codes||
|19|migrant|Tagging of the student as migrant |char|No|Master Codes|Y/N codes||
|20|schoolId|The ID of the school in which the student is studying|str|Yes|Registry|School registry||
|21|classId|The ID of the class in which the student is studying |str|Yes|Master data|-|Classid is a class-section combination|
|22|status|status of the student (active/ dropped out)|char|No|Master Codes|Status codes||
