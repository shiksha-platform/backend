Student grade learning record
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|ID of the specific student grade learning record for a particular assessment|str|Yes|Auto generated|-||
|2|studentId|Student ID as defined by the state student registry|str|Yes|Foreign Key|-||
|3|schoolId|ID of the school of the student|str|Yes|Foreign Key|-||
|4|classId|Class ID of the class of the student|str|Yes|Foreign Key|-||
|5|assessmentId|ID of the assessment|str|Yes|Foreign Key|-||
|6|updateEntityId|ID of the entity that shared this update|str|Yes|Auto generated|-||
|7|subjecttermid|Term ID mapped to the 'subject' category applicable to this student |char|Yes|Master Codes|Terms mapped to Subject Category||
