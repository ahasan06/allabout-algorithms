?- find_doctor('Cardiology', Name, Degree, Institution, Time, Gender).
?- find_doctor_for_condition('Diabetes', Name, Degree, Institution, Time, Gender).
?- find_doctor_for_patient(1, DoctorName, Degree, Institution, Time, Gender).
?- find_doctors_treating_condition('Hypertension', DoctorNames).
?- find_doctors_treating_condition('Asthma', DoctorNames).
?- find_doctors_treating_condition('Fever', DoctorNames).

// Output based on this query

// Find Doctor by Specialization:
Name = 'Dr. Arif Rahman',
Degree = 'MBBS, FCPS (Cardiology)',
Institution = 'Dhaka Medical College, FCPS from Royal College of Physicians, London',
Time = '9:00 AM - 3:00 PM',
Gender = male ;

Name = 'Dr. Shafiqul Islam',
Degree = 'MBBS, FCPS (Cardiology)',
Institution = 'Dhaka Medical College, FCPS from Bangladesh College of Physicians and Surgeons',
Time = '10:00 AM - 5:00 PM',
Gender = male ;

Name = 'Dr. Laila Khatun',
Degree = 'MBBS, FCPS (Cardiology)',
Institution = 'Sylhet MAG Osmani Medical College, FCPS from Royal College of Physicians, London',
Time = '10:00 AM - 4:00 PM',
Gender = female ;

Name = 'Dr. Fahim Ahmed',
Degree = 'MBBS, MD (Cardiology)',
Institution = 'Sir Salimullah Medical College, MD from University of Dhaka',
Time = '9:00 AM - 2:00 PM',
Gender = male ;


// Find Doctor for a Specific Condition:
Name = 'Dr. Shirin Akter',
Degree = 'MBBS, MD (Endocrinology)',
Institution = 'Mymensingh Medical College, MD from BSMMU',
Time = '12:00 PM - 6:00 PM',
Gender = female ;

// Find Doctors Treating a Specific Patient's Condition:
DoctorName = 'Dr. Shirin Akter',
Degree = 'MBBS, MD (Endocrinology)',
Institution = 'Mymensingh Medical College, MD from BSMMU',
Time = '12:00 PM - 6:00 PM',
Gender = female ;

// Find All Doctors Treating Patients with a Specific Condition:
DoctorNames = ['Dr. Tanvir Hossain', 'Dr. Fahim Ahmed'] ;

// Find Doctors Treating Asthma:
DoctorNames = ['Dr. Tanvir Hossain', 'Dr. Faruk Hossain'] ;

//Find Doctors Treating Fever:
DoctorNames = ['Dr. Nusrat Jahan', 'Dr. Tariq Aziz', 'Dr. Sabrina Ahmed'] ;
