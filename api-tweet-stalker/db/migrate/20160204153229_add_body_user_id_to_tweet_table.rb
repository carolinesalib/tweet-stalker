class AddBodyUserIdToTweetTable < ActiveRecord::Migration
  def change
    add_column :tweets, :user_id, :string
    add_column :tweets, :body, :string
  end
end
