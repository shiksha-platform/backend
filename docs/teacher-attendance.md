Teacher attendance
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|attendanceRecordId|ID of the unique attendance record of the teacher|str|Yes|Auto generated|-||
|2|teacherId|Teacher ID of the teacher for whom attendance is recorded|str|Yes|Teacher Registry|-||
|3|attendance|Attendance status of the student|char|Yes|Master Codes|Attendance Codes||
|4|date|Date for which the attendance is being recorded|date|Yes|filled|-||
