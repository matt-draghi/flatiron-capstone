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

mgm1 = MuscleGroupMapper.create(muscle_group_id: mg1.id, exercise_id: ex1.id)
mgm2 = MuscleGroupMapper.create(muscle_group_id: mg7.id, exercise_id: ex2.id)
mgm3 = MuscleGroupMapper.create(muscle_group_id: mg6.id, exercise_id: ex3.id)
mgm4 = MuscleGroupMapper.create(muscle_group_id: mg7.id, exercise_id: ex4.id)
mgm5 = MuscleGroupMapper.create(muscle_group_id: mg8.id, exercise_id: ex5.id)
mgm6 = MuscleGroupMapper.create(muscle_group_id: mg7.id, exercise_id: ex6.id)
mgm7 = MuscleGroupMapper.create(muscle_group_id: mg3.id, exercise_id: ex7.id)
mgm13 = MuscleGroupMapper.create(muscle_group_id: mg2.id, exercise_id: ex7.id)
mgm8 = MuscleGroupMapper.create(muscle_group_id: mg2.id, exercise_id: ex8.id)
mgm9 = MuscleGroupMapper.create(muscle_group_id: mg3.id, exercise_id: ex9.id)
mgm10 = MuscleGroupMapper.create(muscle_group_id: mg3.id, exercise_id: ex10.id)
mgm11 = MuscleGroupMapper.create(muscle_group_id: mg4.id, exercise_id: ex11.id)
mgm12 = MuscleGroupMapper.create(muscle_group_id: mg5.id, exercise_id: ex12.id)


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

# TODO: At the end of the project, will need to grab images for each of these Equipment Pieces
#Equipment_Piece
# Dumbbells
ep1 = EquipmentPiece.create(brand: "Bowflex", name: "SelectTech 552 Adjustable Dumbbell", description: "Say goodbye to 15 sets of dumbbells cluttering your workout space and rapidly switch from one exercise to the next with a turn of a dial", price: 379.99, purchase_url: "https://www.amazon.com/Bowflex-SelectTech-Adjustable-Dumbbells-Pair/dp/B001ARYU58/ref=sr_1_7?keywords=FREE%2BWEIGHTS&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2c983bbc-90cc-4e64-bb6d-8dbb29ba3272&pf_rd_r=ZHQ61J7PEGG9X1G1RRGW&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649452206&s=sporting-goods&sr=1-7&th=1", equipment_type_id: et1.id)
ep2 = EquipmentPiece.create(brand: "JFIT", name: "Dumbbell Hand Weight Pairs and Sets – 10 Vinyl Dumbbell Pairs Options or 7 Neoprene Dumbbell Rack Set Options – Premium Non-Slip, Color Coded Hex Shaped Hand Weights", description: "Pump up your routine with these neoprene coated hand dumbbell pairs from JFIT that will never rust or damage your floors, and with their anti-rolling hex design, your free weights won’t roll away making them easy to stack", price: 59.95, purchase_url: "https://www.amazon.com/JFIT-Dumbbell-Set-Durable-Rack/dp/B00B4RVYPS/ref=sr_1_6?keywords=FREE%2BWEIGHTS&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2c983bbc-90cc-4e64-bb6d-8dbb29ba3272&pf_rd_r=ZHQ61J7PEGG9X1G1RRGW&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649452206&s=sporting-goods&sr=1-6&th=1", equipment_type_id: et1.id)
ep3 = EquipmentPiece.create(brand: "Yes4All", name: "Adjustable Dumbbells 40, 50, 52.5, 60, 105 to 200 lbs with Connector Options for strength training", description: "Threaded ends with star-lock collars provide a safe, secure workout & easy weight plate changes", price: 61.20, purchase_url: "https://www.amazon.com/Yes4All-Adjustable-Dumbbells-50-00-Pounds/dp/B005MHDPBW/ref=sr_1_3?keywords=FREE%2BWEIGHTS&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2c983bbc-90cc-4e64-bb6d-8dbb29ba3272&pf_rd_r=ZHQ61J7PEGG9X1G1RRGW&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649452206&s=sporting-goods&sr=1-3&th=1", equipment_type_id: et1.id)
ep4 = EquipmentPiece.create(brand: "Cap", name: "The ADJUSTABELL weight adjustment system allows you to rapidly switch from one exercise to the next; Easily switch heavy weights for squats and lunges to lighter weights for curls and triceps extensions.", description: "The ADJUSTABELL weight adjustment system allows you to rapidly switch from one exercise to the next; Easily switch heavy weights for squats and lunges to lighter weights for curls and triceps extensions.", price: 94.26, purchase_url: "https://www.amazon.com/Cap-ADJUSTABELL-Adjustable-Dumbbell-Contoured/dp/B09BBRGGN1/ref=sxin_14_pa_sp_search_thematic_sspa?cv_ct_cx=FREE+WEIGHTS&keywords=FREE+WEIGHTS&pd_rd_i=B09BBRGGN1&pd_rd_r=27c074e3-c061-4acb-9f03-e040e772e63e&pd_rd_w=7Q4ak&pd_rd_wg=WBPzZ&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2a63f9aa-4818-411f-b18f-c36a9a45cbb3&pf_rd_r=DBRW43KJMBHJEBT76736&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649452206&s=sporting-goods&sr=1-4-f279aa53-2909-43d9-bb22-12e97e191132-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOFBXQ0FPNDM0WE02JmVuY3J5cHRlZElkPUEwNTY0NDExMk9GMUo2MDZETUdWWCZlbmNyeXB0ZWRBZElkPUEwODkwNDIyMUs5T09UTk9WREtHQyZ3aWRnZXROYW1lPXNwX3NlYXJjaF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", equipment_type_id: et1.id)
ep5 = EquipmentPiece.create(brand: "Mc-Core", name: "Products McCore Adjustable dumbbell set - 11 22 Lbs dumbbells, weights for home or office use, Portable sets, Soft Grip Weight comfort, dumbbells set,Dumb bells", description: "Easy Weight Selection: Screw off each weight plate to reduce the weight, and screw them back on to increase the weight of the dumbbell set.", price: 149.99, purchase_url: "https://www.amazon.com/Mc-Core-Products-McCore-Adjustable-dumbbell/dp/B09FCVVQKV/ref=sxin_14_pa_sp_search_thematic_sspa?cv_ct_cx=FREE+WEIGHTS&keywords=FREE+WEIGHTS&pd_rd_i=B09FCVVQKV&pd_rd_r=27c074e3-c061-4acb-9f03-e040e772e63e&pd_rd_w=7Q4ak&pd_rd_wg=WBPzZ&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2a63f9aa-4818-411f-b18f-c36a9a45cbb3&pf_rd_r=DBRW43KJMBHJEBT76736&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649452206&s=sporting-goods&sr=1-2-f279aa53-2909-43d9-bb22-12e97e191132-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOFBXQ0FPNDM0WE02JmVuY3J5cHRlZElkPUEwNTY0NDExMk9GMUo2MDZETUdWWCZlbmNyeXB0ZWRBZElkPUEwNjMyNTIxMjRKSkpOU0tXMVlaWCZ3aWRnZXROYW1lPXNwX3NlYXJjaF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", equipment_type_id: et1.id)
ep6 = EquipmentPiece.create(brand: "Apex Life Fitness", name: "Cast Iron Adjustable Dumbbells 50, 100 LBS, Home Gym Dumbbells Weight Set", description: "TRI-GRIP HAMMERTONE CAST IRON PLATES: Highly durable plates coated with hammertone paint to protect from rust and chipping. Typical black paint coated plates will easily chip and suffer from wear and tear. Tri grip appearance allows for easy adjustability and handling", price: 224.99, purchase_url: "https://www.amazon.com/Apex-Life-Fitness-Adjustable-Dumbbell/dp/B08P871993/ref=sxin_14_pa_sp_search_thematic_sspa?cv_ct_cx=FREE%2BWEIGHTS&keywords=FREE%2BWEIGHTS&pd_rd_i=B08P871993&pd_rd_r=27c074e3-c061-4acb-9f03-e040e772e63e&pd_rd_w=7Q4ak&pd_rd_wg=WBPzZ&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2a63f9aa-4818-411f-b18f-c36a9a45cbb3&pf_rd_r=DBRW43KJMBHJEBT76736&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649452206&s=sporting-goods&sr=1-1-f279aa53-2909-43d9-bb22-12e97e191132-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOFBXQ0FPNDM0WE02JmVuY3J5cHRlZElkPUEwNTY0NDExMk9GMUo2MDZETUdWWCZlbmNyeXB0ZWRBZElkPUEwODQzNTM0VkNOMlVZQ0tKOTBEJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1", equipment_type_id: et1.id)
# Barbell
ep7= EquipmentPiece.create(brand: "Steelbody", name: "IWF Standard 20kg and 15kg Olympic Weight Barbell Multiple Colors Available", description: "The Olympic bar offers more flexibility and elasticity, which prevents it from bending to handle much greater loads while you are doing exercises like squats, presses, rows, curls, deadlifts, snatches, cleans and jerks", price: 271.08, purchase_url: "https://www.amazon.com/Steelbody-Olympic-Barbell-Ceramic-Coating/dp/B09B8N71H4/ref=sr_1_31_sspa?keywords=WEIGHT+BARBELLS+AND+PLATES&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2c983bbc-90cc-4e64-bb6d-8dbb29ba3272&pf_rd_r=ZHQ61J7PEGG9X1G1RRGW&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649453772&s=sporting-goods&sr=1-31-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUkcxRjZUMkJHOU5PJmVuY3J5cHRlZElkPUEwNjMwNzE0MlJXVTFEMU1UTE1VRyZlbmNyeXB0ZWRBZElkPUEwOTMwNjU4MjJPTFVNN0lMWVQzNCZ3aWRnZXROYW1lPXNwX2J0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", equipment_type_id: et2.id)
# Bench
ep8= EquipmentPiece.create(brand: "FLYBIRD", name: "Adjustable Bench,Utility Weight Bench for Full Body Workout- Multi-Purpose Foldable incline/decline Bench", description: "Designed with 6 back positions & 4 seat positions for Full Body Workout, you just pull support bar, adjust to the place which fit yourself and all is done!", price: 139.99, purchase_url: "https://www.amazon.com/FLYBIRD-Adjustable-Workout-Multi-Purpose-Foldable/dp/B07HNLBZ4Y/ref=sr_1_9?keywords=WEIGHT+BENCHES&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2c983bbc-90cc-4e64-bb6d-8dbb29ba3272&pf_rd_r=ZHQ61J7PEGG9X1G1RRGW&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649453883&s=sporting-goods&sr=1-9", equipment_type_id: et3.id)
ep9= EquipmentPiece.create(brand: "PASYOU", name: "Adjustable Weight Bench Full Body Workout Multi-Purpose Foldable Incline Decline Exercise Workout Bench for Home Gym", description: "Designed with 7 back positions to meet all your needs when doing workouts, you can perform a number of upper and lower body exercises while incorporating dumbbell use to hit goals and build/maintain muscle.", price: 109.98, purchase_url: "https://www.amazon.com/PASYOU-Adjustable-Workout-Foldable-Exercise/dp/B07S7NRZL4/ref=sr_1_3_sspa?keywords=WEIGHT+BENCHES&pf_rd_i=23550735011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2c983bbc-90cc-4e64-bb6d-8dbb29ba3272&pf_rd_r=ZHQ61J7PEGG9X1G1RRGW&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649453883&s=sporting-goods&sr=1-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQVdXSUFQWVhBUUpDJmVuY3J5cHRlZElkPUEwODQ2NTY3Wk80NUFMV1pWQllSJmVuY3J5cHRlZEFkSWQ9QTA4ODM0NzJGSEFGR0VDVEYwVVgmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl", equipment_type_id: et3.id)
# Mats
ep10= EquipmentPiece.create(brand: "Amazon Basics", name: "1/2-Inch Extra Thick Exercise Yoga Mat", description: "Elastic straps secure rolled-up mat; includes shoulder strap for easy carrying", price: 17.16, purchase_url: "https://www.amazon.com/AmazonBasics-Extra-Thick-Exercise-Carrying/dp/B01LP0V4JY/ref=sr_1_5?keywords=yoga%2Bmats&pf_rd_i=23550734011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=9880b437-baea-42c2-b448-d65ec844c9b8&pf_rd_r=YW742FZPTVTFCGAB1BDG&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649454061&s=exercise-and-fitness&sr=1-5&th=1", equipment_type_id: et5.id)
ep11= EquipmentPiece.create(brand: "Retrospec", name: 'Solana Yoga Mat 1" & 1/2" Thick w/Nylon Strap for Men & Women - Non Slip Exercise Mat for Yoga', description: "Solana's non-slip material keeps you steady and balanced while staying securely on the floor, preventing injury and allowing you to focus on your practice or workout.", price: 21.99, purchase_url: "https://www.amazon.com/Retrospec-Solana-Thick-Nylon-Strap/dp/B091FWPJCL/ref=sr_1_7?keywords=yoga%2Bmats&pf_rd_i=23550734011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=9880b437-baea-42c2-b448-d65ec844c9b8&pf_rd_r=YW742FZPTVTFCGAB1BDG&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1649454061&s=exercise-and-fitness&sr=1-7&th=1", equipment_type_id: et5.id)

# Ab Wheel
ep12= EquipmentPiece.create(brand: "Sports Research", name: 'Ab Wheel Roller with Knee Pad | Sturdy 3" Wheel for Core Workouts in The Gym or at Home', description: "This premium core strengthening wheel helps build and tone your abs, arms & back. Effectively work out your core at home, the gym, or the office!", price: 21.95, purchase_url: "https://www.amazon.com/Sports-Research-Abdominal-Exercise-Strength/dp/B01BL1134S/ref=sr_1_3_sspa?keywords=ab+wheel&qid=1649454429&s=sporting-goods&sprefix=ab+w%2Csporting%2C100&sr=1-3-spons&psc=1&smid=AQAIDN8YDF665&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2NFI0MFhKTlRTS0smZW5jcnlwdGVkSWQ9QTA2MDg0OTAzSDlUUzNHT0NPSVhYJmVuY3J5cHRlZEFkSWQ9QTA5ODM5OTYxVE5QNDdaREdWSUY2JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==", equipment_type_id: et6.id)
ep13= EquipmentPiece.create(brand: "VINSGUIR", name: "Ab Roller Wheel, Abs Workout Equipment for Abdominal & Core Strength Training, Exercise Wheels for Home Gym Fitness, Ab Machine with Knee Pad Accessories", description: "Easy to install, Vinsguir ab roller provides superb convenience and efficiency for abdominal & core strength training. Unlike big machines, benches, push up bars, dumbbells, or other heavy workout stuff, the ab roller wheel is portable size-wise -- a compact design that enables you to take it anywhere to exercise, be it your home, office, gym, or outdoors", price: 22.09, purchase_url: "https://www.amazon.com/Vinsguir-Workout-Exercise-Equipment-Abdominal/dp/B07RKW5H68/ref=sr_1_1_sspa?keywords=ab%2Bwheel&qid=1649454429&s=sporting-goods&sprefix=ab%2Bw%2Csporting%2C100&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2NFI0MFhKTlRTS0smZW5jcnlwdGVkSWQ9QTA2MDg0OTAzSDlUUzNHT0NPSVhYJmVuY3J5cHRlZEFkSWQ9QTAzMTk0NjdMVVdONEdNSTJJMlQmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1", equipment_type_id: et6.id)
# Jump Rope
ep14= EquipmentPiece.create(brand: "DEGOL", name: 'Skipping Rope with Ball Bearings Rapid Speed Jump Rope Cable and 6” Memory Foam Handles Ideal for Aerobic Exercise Like Speed Training, Extreme Jumping, Endurance Training and Fitness Gym', description: "our exercise skipping rope can shape your cardio endurance, stamina and speed, while improving the muscle tension of your whole body. A great choice for boxing, MMA and cross training.", price: 9.59, purchase_url: "https://www.amazon.com/DEGOL-Skipping-Tangle-Free-Bearings-Endurance/dp/B07P2F2YHT/ref=sr_1_4?keywords=jump+ropes+for+fitness&qid=1649454252&s=sporting-goods&sprefix=jump%2Csporting%2C104&sr=1-4", equipment_type_id: et7.id)
ep15= EquipmentPiece.create(brand: "WPierce", name: "Jump Rope Skip Speed & Weighted Jump Ropes 2.5mm Speed Rope /3.4mm Regular Rope with Extra Speed Cable Ball Bearings Anti-Slip Handle for Double Unders Crossfit Anti-Slip Handles Sports", description: "The Jump rope has a handle with grooves on it for your thumb and index finger to rest, which makes grip natural and comfortable. The sweatband tapes allow you to hold your rope without worrying about slipping.", price: 14.99, purchase_url: "https://www.amazon.com/WPierce-Weighted-Bearings-Anti-Slip-Crossfit/dp/B08C7F18LX/ref=sxin_14_pa_sp_search_thematic_sspa?cv_ct_cx=jump+ropes+for+fitness&keywords=jump+ropes+for+fitness&pd_rd_i=B08C7F18LX&pd_rd_r=fefe6b94-6dc1-4e94-8904-41227cf5c59c&pd_rd_w=0BbxH&pd_rd_wg=x9jOP&pf_rd_p=2a63f9aa-4818-411f-b18f-c36a9a45cbb3&pf_rd_r=17JFG6RG6JVM2NJ1KHS5&qid=1649454252&s=sporting-goods&sprefix=jump%2Csporting%2C104&sr=1-3-f279aa53-2909-43d9-bb22-12e97e191132-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyODlNOEUyQkxVQlpPJmVuY3J5cHRlZElkPUEwMzMzODc0MkVWOTFERDlMNlVJNSZlbmNyeXB0ZWRBZElkPUEwODYwOTAyMTRRN0E4WUIwQlBTQyZ3aWRnZXROYW1lPXNwX3NlYXJjaF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", equipment_type_id: et7.id)
# Box
ep16= EquipmentPiece.create(brand: "BalanceFrom", name: "3 in 1 20 Inch 24 Inch 30 Inch Foam Plyometric Box Jumping Exercise", description: "Anti-slip - the surface is a slip-free, meaning you can have stability with every single set of jumps", price: 110.79, purchase_url: "https://www.amazon.com/BalanceFrom-Plyometric-Jumping-Exercise-Regular/dp/B07PXKYX5M/ref=sr_1_4?keywords=fitness%2Bbox&qid=1649454570&s=sporting-goods&sprefix=fitness%2Bbo%2Csporting%2C106&sr=1-4&th=1", equipment_type_id: et8.id)
ep17= EquipmentPiece.create(brand: "Yes4All", name: "3 in 1 Wooden Plyo Box, Plyometric Box Platform for Home Gym and Outdoor Workout", description: "ONE BOX, MULTIPLE FUNCTIONS: with just only our Vintage Wooden Plyo Box, you can do daily workouts right at home, while having a beautiful extra piece of furniture for your cozy house.", price: 49.08, purchase_url: "https://www.amazon.com/Yes4All-Exercise-Crossfit-Training-Plyometric/dp/B073Z8DFL2/ref=sr_1_5?keywords=fitness%2Bbox&qid=1649454570&s=sporting-goods&sprefix=fitness%2Bbo%2Csporting%2C106&sr=1-5&th=1", equipment_type_id: et8.id)
# Medicine Ball
ep18= EquipmentPiece.create(brand: "Yes4All", name: "Slam Balls (Black, Blue, Teal, Orange & Glossy) 10-40lbs for Strength and Crossfit Workout – Slam Medicine Ball", description: "The Weight Ball is filled with sand to prevent it from bouncing or rolling and enhance the balance and firmness of the ball", price: 26.85, purchase_url: "https://www.amazon.com/Yes4All-Slam-Strength-Crossfit-Workout/dp/B0773FSFYJ/ref=sr_1_5?keywords=medicine%2Bball&qid=1649454746&s=sporting-goods&sprefix=medic%2Csporting%2C83&sr=1-5&th=1", equipment_type_id: et9.id)
ep19= EquipmentPiece.create(brand: "ProsourceFit", name: "Slam Medicine Balls 5Lbs Smooth Textured Grip Dead Weight Balls for Crossfit, Strength & Conditioning Exercises", description: "From powerful throws to basics like squats and presses, weighted medicine balls help improve coordination, core strength and endurance Marketplace", price: 31.00, purchase_url: "https://www.amazon.com/ProSource-Medicine-Textured-Conditioning-Exercises/dp/B07FR67WS2/ref=sr_1_16?keywords=medicine%2Bball&qid=1649454746&s=sporting-goods&sprefix=medic%2Csporting%2C83&sr=1-16&th=1", equipment_type_id: et9.id)
# Kettlebells
ep20= EquipmentPiece.create(brand: "Dragon Door", name: "RKC Russian Kettlebell", description: "Powerful tool to aid weight loss and muscle gain", price: 139.99, purchase_url: "https://www.amazon.com/Russian-Kettlebell-24kg-53-lbs/dp/B00A26FM46/ref=sxin_14_pa_sp_search_thematic_sspa?cv_ct_cx=kettlebell&keywords=kettlebell&pd_rd_i=B00A26FM46&pd_rd_r=3b3861df-49ae-4ae9-8d56-343b85771a5b&pd_rd_w=YCVcn&pd_rd_wg=0TeaF&pf_rd_p=2a63f9aa-4818-411f-b18f-c36a9a45cbb3&pf_rd_r=N3PD2ZRD7ZD8YV64VTPF&qid=1649454901&s=sporting-goods&sprefix=kettle%2Csporting%2C82&sr=1-4-f279aa53-2909-43d9-bb22-12e97e191132-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyR1c4TkhINTBGVko0JmVuY3J5cHRlZElkPUEwNTcyMDgyMlRKRllNV1BNNDVLRCZlbmNyeXB0ZWRBZElkPUEwNjY2NTU3M0QxWDU0TjZZRVlDWCZ3aWRnZXROYW1lPXNwX3NlYXJjaF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", equipment_type_id: et10.id)
ep21= EquipmentPiece.create(brand: "Amazon Basics", name: "Cast Iron Kettlebell Weight", description: "Made of solid high-quality cast iron for reliable built-to-last strength", price: 27.99, purchase_url: "https://www.amazon.com/AmazonBasics-Cast-Iron-Kettlebell-Pounds/dp/B0731DFTR2/ref=sr_1_4?keywords=kettlebell&qid=1649454901&s=sporting-goods&sprefix=kettle%2Csporting%2C82&sr=1-4&th=1", equipment_type_id: et10.id)
ep22= EquipmentPiece.create(brand: "Bowflex", name: "SelectTech 840 Kettlebell", description: "With the turn of a dial, automatically change your resistance from 8 pounds all the way up to 40 pounds", price: 119.99, purchase_url: "https://www.amazon.com/Bowflex-100790-840-SelectTech-Kettlebell/dp/B07X64MXBS/ref=sr_1_7?keywords=kettlebell&qid=1649454901&s=sporting-goods&sprefix=kettle%2Csporting%2C82&sr=1-7", equipment_type_id: et10.id)