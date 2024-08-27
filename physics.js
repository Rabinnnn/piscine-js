const obj = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t:1,
    d: 10

}

function getAcceleration(obj){
    if (obj.f !== undefined && obj.m !== undefined){
        return obj.f/obj.m
    }

    if(obj['Δv'] !== undefined && obj['Δt'] !== undefined){
        return obj['Δv']/obj['Δt']
    }

    if(obj.d !== undefined && obj.t !== undefined){
        return (2*obj.d)/(obj.t ** 2)
    }
    return 'impossible'
}