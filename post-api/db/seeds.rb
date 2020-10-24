# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create({
    { body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    { body: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'}, 
    { body: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    { body: 'It has survived not only five centuries, but also the leap into electronic typesetting,'},
    { body: 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset'},
    { body: 'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software'},
    { body: 'like Aldus PageMaker including versions of Lorem Ipsum.'},
})