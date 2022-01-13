Teacher
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|teacherId|Teacher ID as defined by the state teacher registry|str|Yes|Auto generated|-||
|2|refteacherId|Teacher ID as defined by a secondary state database of teachers|str|No|Registry|Brownfield teacher registry|Such as Manav Sampada (brownfield)|
|3|firstName|First name of the teacher|char|Yes|Filled|-||
|4|lastName|Last name of the teacher|char|Yes|Filled|-||
|5|contactNumber|Most active mobile number of the teacher|int|Yes|Filled|-||
|6|email|Most active email address of the teacher|str|No|Filled|-||
|7|gender|Gender of the teacher|char|Yes|Master Codes|Gender codes||
|8|socialCategory|Social category of the teacher as defined by the state|char|No|Master Codes|Category codes||
|9|birthDate|Date of birth of the teacher|date|No|Filled|-||
|10|designation|Designation of the teacher as defined by the state education department|char|No|Master Codes|Teacher designation codes||
|11|cadre|Cadre of the teacher|char|Yes|Master Codes|Cadre codes|JBT, TGT, C&V, PGT are examples of the cadres|
|12|profQualification|Professional qualification of the teacher |char|No|Master Codes|Qualification codes||
|13|joiningDate|Date of joining the state education department|date|No|Filled|-|What will the joining date for contract teachers be?|
|14|subjecttermid|The array of subjects that the teacher is expected to teach in the classes|str|Yes|Master data|Term mapped to Subject Category||
|15|bloodGroup|Blood group of the teacher|char|No|Master Codes|Blood Group Codes||
|16|maritalStatus|Marital status of the teacher|char|No|Master Codes|Marital Status Codes||
|17|blockId|Block ID of the residence of the teacher|str|No|Master Codes|Location Codes||
|18|address|Address of the teacher|str|No|Filled|-||
|19|compSkills|Computer skills of the teacher|char|No|Master Codes|Skills Codes||
|20|disability|Disabilities of the teacher, if any|char|No|Master Codes|Disabilities Codes||
|21|religion|Religion of the teacher|char|No|Master Codes|Religion Codes||
|22|homeDistance|Distance between teacher's home and the school|int|No|Filled|-|This is not auto filled as the state does not collect GPS coordinates of hte teachers home.|
|23|roles|Role of the teacher (Teacher/ Principal)|char|Yes|Master Codes|Role codes||
|24|schoolId|The ID of the school in which the teacher is teaching|str|Yes|Registry|School registry||
|25|acrId|ACR unique ID of the teacher|str|Yes|Auto generated|-||
|26|retirementDate|Date of retirement of the teacher|date|Yes|Auto generated|-||
|27|workingStatus|Working, station not allocated, dead, retired, terminated, suspended|char|Yes|Master Codes|Working Status Codes||
