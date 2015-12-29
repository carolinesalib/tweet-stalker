class CreateStalks < ActiveRecord::Migration[5.0]
  def change
    create_table :stalks do |t|
      t.integer :twitter_user_id
      t.string :url
      t.boolean :notification

      t.timestamps
    end
  end
end
