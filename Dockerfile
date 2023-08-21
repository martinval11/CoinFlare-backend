# Production stage
FROM alpine:latest as production
RUN apk --no-cache add nodejs ca-certificates git
WORKDIR /root/
#COPY --from=builder /usr/src/app ./
CMD [ "git clone", "https://github.com/martinval11/CoinFlare-backend"]
CMD [ "cd", "CoinFlare-backend"]
CMD [ "npm start" ]