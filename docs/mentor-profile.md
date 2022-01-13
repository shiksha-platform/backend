Mentor profile
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|mentorId|Unique ID given to mentors |int|Yes|Auto generated|-|Haryana specific options: ABRC/BRP|
|2|designation|Designation of the mentor|str|Yes|Master Codes|Designation Codes|Options: Hindi, English, Math, Science, SST, None|
|3|subjecttermid|Subject specialisation of the mentor|str|Yes|Master Codes|Term mapped to Subject Category||
|4|district|District of the mentor|str|Yes|Master Codes|Location Codes||
|5|block|Block of the mentor|str|Yes|Master Codes|Location Codes|Options: Head School Name, None|
|6|cluster|Cluster of the mentor|str|Yes|Master Codes|Location Codes|String of multiple school codes|
|7|schoolId|School codes of the schools assinged to the mentor|str|Yes|School Registry|-|Options: Filled, Vacant, Maternity Leave, On Long Leave|
|8|status|Mentor status|str|Yes|Master Codes|Status Codes||
|9|teacherId|In case the mentor is an existing teacher, mapping to their unique teacher ID|int|No|Teacher Registry|-||
