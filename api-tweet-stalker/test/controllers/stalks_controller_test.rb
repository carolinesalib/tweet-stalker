require 'test_helper'

class StalksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @stalk = stalks(:one)
  end

  test "should get index" do
    get stalks_url
    assert_response :success
  end

  test "should create stalk" do
    assert_difference('Stalk.count') do
      post stalks_url, params: { stalk: { notification: @stalk.notification, twitter_user_id: @stalk.twitter_user_id, url: @stalk.url } }
    end

    assert_response 201
  end

  test "should show stalk" do
    get stalk_url(@stalk)
    assert_response :success
  end

  test "should update stalk" do
    patch stalk_url(@stalk), params: { stalk: { notification: @stalk.notification, twitter_user_id: @stalk.twitter_user_id, url: @stalk.url } }
    assert_response 200
  end

  test "should destroy stalk" do
    assert_difference('Stalk.count', -1) do
      delete stalk_url(@stalk)
    end

    assert_response 204
  end
end
