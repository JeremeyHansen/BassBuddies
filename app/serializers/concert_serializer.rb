class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :venue, :address, :date, :img, :artist, :link
end
