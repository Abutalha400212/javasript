function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const third100Rate = 80
    const restRate = 60;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <=200){
        const first100price = 100* first100Rate;
        const restTicketQuantity = ticketQuantity-100;
        const restTicketPrice = restTicketQuantity*second100Rate;
        const totalPrice = first100price + restTicketPrice;
        return totalPrice;
    }
    else if(ticketQuantity <=300) {
        const first100price = first100Rate *100;
        const second100price = second100Rate *100;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalPrice = first100price +second100price +restTicketPrice;
        return totalPrice;
    }
    else{
        const first100price = first100Rate *100;
        const second100price = second100Rate *100;
        const third100price = third100Rate *100;
        const restTicketQuantity = ticketQuantity -300;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalPrice = first100price +second100price + third100price +restTicketPrice;
        return totalPrice;
    }
}
console.log((ticketPrice(212)));