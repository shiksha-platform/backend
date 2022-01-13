Student attendance
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|attendanceRecordId|Unique ID of the attendance record|str|Yes|Auto generated|||
|2|studentId|Student ID as defined by the state student registry|str|Yes|Student Registry|||
|3|attendance|Attendance status of the student|char|Yes|Master Codes|Attendance Codes||
|4|date|Date for which the attendance is being recorded|date|Yes|Filled|||
|5|classId|Unique ID of the class within the school|str|Yes|Class Registry|||
|6|teacherId|Teacher ID of the teacher who has filled the student attendance|str|Yes|Teacher Registry||For maintaining searchable audit trails|
