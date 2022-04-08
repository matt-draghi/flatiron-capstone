# Users
u1 = User.create(username: "test1", email: "test1@test.com", password: "test", password_confirmation: "test")
u2 = User.create(username: "test2", email: "test2@test.com", password: "test", password_confirmation: "test")
u3 = User.create(username: "test3", email: "test3@test.com", password: "test", password_confirmation: "test")
u4 = User.create(username: "test4", email: "test4@test.com", password: "test", password_confirmation: "test")
u5 = User.create(username: "test5", email: "test5@test.com", password: "test", password_confirmation: "test")


# Workouts

w1 = Workout.create(name: "Workout1", user_id: u1.id, description: "This is a test description for this user's workout")
w2 = Workout.create(name: "Workout2", user_id: u2.id, description: "This is a test description for this user's workout")
w3 = Workout.create(name: "Workout3", user_id: u3.id, description: "This is a test description for this user's workout")
w4 = Workout.create(name: "Workout4", user_id: u4.id, description: "This is a test description for this user's workout")
w5 = Workout.create(name: "Workout5", user_id: u1.id, description: "This is a test description for this user's workout")
w6 = Workout.create(name: "Workout6", user_id: u2.id, description: "This is a test description for this user's workout")


#Exercises

ex1 = Exercise.create(name: "Dumbbell Bench Press", demo_url:"https://www.youtube.com/embed/XMc1N3o-Qyw", description:"This is a placeholder for the description")
ex2 = Exercise.create(name: "Forward Lunges", demo_url:"https://www.youtube.com/embed/QE_hU8XX48I", description:"This is a placeholder for the description")
ex3 = Exercise.create(name: "Bent Over Rows", demo_url:"https://www.youtube.com/embed/pyBHPoC8Nzo", description:"This is a placeholder for the description")
ex4 = Exercise.create(name: "Kettlebell Swings", demo_url:"https://www.youtube.com/embed/RU88iqRVunk", description:"This is a placeholder for the description")
ex5 = Exercise.create(name: "Jump Rope", demo_url:"https://www.youtube.com/embed/NkXDy8K-1jY", description:"This is a placeholder for the description")
ex6 = Exercise.create(name: "Box Jumps", demo_url:"https://www.youtube.com/embed/NBY9-kTuHEk", description:"This is a placeholder for the description")
ex7 = Exercise.create(name: "Mountain Climbers", demo_url:"https://www.youtube.com/embed/qEh2e5zuGgQ", description:"This is a placeholder for the description")
ex8 = Exercise.create(name: "DB Shoulder Press", demo_url:"https://www.youtube.com/embed/AqzDJHxynwo", description:"This is a placeholder for the description")
ex9 = Exercise.create(name: "Crunches", demo_url:"https://www.youtube.com/embed/qZq9bNk1owk", description:"This is a placeholder for the description")
ex10 = Exercise.create(name: "Ab Wheel", demo_url:"https://www.youtube.com/embed/u-_UGQWwUJM", description:"This is a placeholder for the description")
ex11 = Exercise.create(name: "Bicep Curls", demo_url:"https://www.youtube.com/embed/mebsnWJRasA", description:"This is a placeholder for the description")
ex12 = Exercise.create(name: "Skull Crushers", demo_url:"https://www.youtube.com/embed/I7JAmFl1uak", description:"This is a placeholder for the description")


#Workout_Mappers
wm1 = WorkoutMapper.create(workout_id: w1.id, exercise_id: ex1.id)
wm2 = WorkoutMapper.create(workout_id: w1.id, exercise_id: ex3.id)
wm3 = WorkoutMapper.create(workout_id: w1.id, exercise_id: ex4.id)
wm4 = WorkoutMapper.create(workout_id: w1.id, exercise_id: ex7.id)
wm5 = WorkoutMapper.create(workout_id: w1.id, exercise_id: ex12.id)
wm6 = WorkoutMapper.create(workout_id: w1.id, exercise_id: ex5.id)
wm7 = WorkoutMapper.create(workout_id: w1.id, exercise_id: ex4.id)

wm8 = WorkoutMapper.create(workout_id: w2.id, exercise_id: ex1.id)
wm9 = WorkoutMapper.create(workout_id: w2.id, exercise_id: ex11.id)
wm10 = WorkoutMapper.create(workout_id: w2.id, exercise_id: ex9.id)
wm11 = WorkoutMapper.create(workout_id: w3.id, exercise_id: ex2.id)
wm12 = WorkoutMapper.create(workout_id: w4.id, exercise_id: ex3.id)
wm13 = WorkoutMapper.create(workout_id: w3.id, exercise_id: ex5.id)
wm14 = WorkoutMapper.create(workout_id: w5.id, exercise_id: ex7.id)


#Muscle_Groups

mg1 = MuscleGroup.create(name: "Chest")
mg2 = MuscleGroup.create(name: "Shoulders")
mg3 = MuscleGroup.create(name: "Core")
mg4 = MuscleGroup.create(name: "Biceps")
mg5 = MuscleGroup.create(name: "Triceps")
mg6 = MuscleGroup.create(name: "Back")
mg7 = MuscleGroup.create(name: "Legs")
mg8 = MuscleGroup.create(name: "Cardio")


#Muscle_Group_Mappers

mgm1 = (muscle_group_id: mg1.id, exercise_id: ex1.id)
mgm2 = (muscle_group_id: mg7.id, exercise_id: ex2.id)
mgm3 = (muscle_group_id: mg6.id, exercise_id: ex3.id)
mgm4 = (muscle_group_id: mg7.id, exercise_id: ex4.id)
mgm5 = (muscle_group_id: mg8.id, exercise_id: ex5.id)
mgm6 = (muscle_group_id: mg7.id, exercise_id: ex6.id)
mgm7 = (muscle_group_id: mg3.id, exercise_id: ex7.id)
mgm13 = (muscle_group_id: mg2.id, exercise_id: ex7.id)
mgm8 = (muscle_group_id: mg2.id, exercise_id: ex8.id)
mgm9 = (muscle_group_id: mg3.id, exercise_id: ex9.id)
mgm10 = (muscle_group_id: mg3.id, exercise_id: ex10.id)
mgm11 = (muscle_group_id: mg4.id, exercise_id: ex11.id)
mgm12 = (muscle_group_id: mg5.id, exercise_id: ex12.id)


#Equipment_Type
et1 = EquipmentType.create(category: "Dumbbells", image_url: "")
et2 = EquipmentType.create(category: "Barbell", image_url: "")
et3 = EquipmentType.create(category: "Bench", image_url: "")
et4 = EquipmentType.create(category: "No Equipment", image_url: "")
et5 = EquipmentType.create(category: "Mats", image_url: "")
et6 = EquipmentType.create(category: "Ab Wheel", image_url: "")
et7 = EquipmentType.create(category: "Jump Rope", image_url: "")
et8 = EquipmentType.create(category: "Box", image_url: "")
et9 = EquipmentType.create(category: "Medicine Ball", image_url: "")
et10 = EquipmentType.create(category: "Kettlebells", image_url: "")


#Exercise_Mappers
exm1 = ExerciseMapper.create(equipment_type_id: et1.id, exercise_id: ex1.id)
exm2 = ExerciseMapper.create(equipment_type_id: et3.id, exercise_id: ex1.id)

exm3 = ExerciseMapper.create(equipment_type_id: et1.id, exercise_id: ex2.id)
exm4 = ExerciseMapper.create(equipment_type_id: et4.id, exercise_id: ex2.id)

exm5 = ExerciseMapper.create(equipment_type_id: et1.id, exercise_id: ex3.id)
exm6 = ExerciseMapper.create(equipment_type_id: et2.id, exercise_id: ex3.id)
exm7 = ExerciseMapper.create(equipment_type_id: et10.id, exercise_id: ex3.id)

exm8 = ExerciseMapper.create(equipment_type_id: et10.id, exercise_id: ex4.id)

exm9 = ExerciseMapper.create(equipment_type_id: et7.id, exercise_id: ex5.id)

exm10 = ExerciseMapper.create(equipment_type_id: et8.id, exercise_id: ex6.id)

exm11 = ExerciseMapper.create(equipment_type_id: et5.id, exercise_id: ex7.id)
exm12 = ExerciseMapper.create(equipment_type_id: et4.id, exercise_id: ex7.id)

exm13 = ExerciseMapper.create(equipment_type_id: et1.id, exercise_id: ex8.id)

exm14 = ExerciseMapper.create(equipment_type_id: et5.id, exercise_id: ex9.id)
exm15 = ExerciseMapper.create(equipment_type_id: et4.id, exercise_id: ex9.id)

exm16 = ExerciseMapper.create(equipment_type_id: et6.id, exercise_id: ex10.id)
exm17 = ExerciseMapper.create(equipment_type_id: et5.id, exercise_id: ex10.id)

exm18 = ExerciseMapper.create(equipment_type_id: et1.id, exercise_id: ex11.id)
exm19 = ExerciseMapper.create(equipment_type_id: et2.id, exercise_id: ex11.id)

exm20 = ExerciseMapper.create(equipment_type_id: et1.id, exercise_id: ex12.id)
exm21 = ExerciseMapper.create(equipment_type_id: et3.id, exercise_id: ex12.id)


#Equipment_Piece
