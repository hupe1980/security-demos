FROM golang:1.13.3-alpine3.10 as builder

WORKDIR /app

COPY main.go .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

FROM alpine:3.10

WORKDIR /app

COPY --from=builder /app .

CMD ["./main"]




