class ConcertsController < ApplicationController
    def index
        render json: Concert.all, status: 200
    end
end
