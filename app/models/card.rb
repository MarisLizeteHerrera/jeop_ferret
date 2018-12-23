class Card < ApplicationRecord
  belongs_to :category, optional: true
end
