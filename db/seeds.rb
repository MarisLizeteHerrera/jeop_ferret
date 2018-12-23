card_count = 5
cat_id = 1

5.times do
  cat_name = Faker::Artist.name
  Category.create(
    name: cat_name
  )

  count = 1
  card_count.times do
    Card.create(
      question: "Question #{count} - Category #{cat_id}",
      answer: "Ans #{count} - Cat #{cat_id}",
      points: rand(1...100),
      complete: false,
      category_id: cat_id
    )
    count += 1
  end

  cat_id += 1
  puts "Category #{cat_name} created with #{card_count} cards"
end

puts "5 Categories created with #{card_count} cards each"


# card_count.times do
#   Card.create(
#     question: Faker::ChuckNorris.fact,
#     answer: Faker::Movie.quote,
#     points: rand(1...100),
#     complete: false,
#     category_id: cat_id
#   )
# end