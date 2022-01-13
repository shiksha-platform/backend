School Enrolment Record
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|studentId|Student ID as defined by the state student registry|str|Yes|Auto generated|-||
|2|schoolId|School ID as defined by the state|str|Yes|Foreign Key|-||
|3|enrolmentDate|Date on which the student has enrolled |date|Yes|Auto generated|-||
|4|status|Verification status of the student|char|Yes|Master Codes|Status Codes||
|5|verifiedBy|Teacher ID of the teacher who has verified/ is responsible for verifying|str|Yes|Foreign Key|-||
|6|lastVerifiedOn|Last verification date to understand if this student has been verified by the teachers|date|Yes|Auto generated|-||
|7|pastSchoolId|Array of past school IDs along with start and end dates|date|No|Filled|-||
