# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sam = User.create(name: "Sam", email: "sam@nothing.com")
bart = User.create(name: "Bartholomew", email: "bart@hotmail.com")

sam_general = Resume.create(image_url: "https://en.wikipedia.org/wiki/File:Resume.pdf", industry: "general", user: sam)

bart_comment = Comment.create(resume: sam_general, poster: bart)
