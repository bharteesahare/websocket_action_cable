# Rails.application.config.middleware.insert_before 0, Rake::Cors do
#   allow do
#     origin '*'

#     resource '*',
#       headers: :any,
#       methods: %i[get post put patch delete options head]
#   end
# end

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :patch, :put]
  end
end
