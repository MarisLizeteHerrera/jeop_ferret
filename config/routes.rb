Rails.application.routes.draw do
  namespace :api do
    resources :categories do
      resources :cards
  end

  get '*other', to: 'static#index'
end
end
