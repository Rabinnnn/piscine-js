function first(slice){
    return slice[0]
}

function last(slice){
    return slice[slice.length-1]
}

function kiss(slice){
    return slice[last(slice), first(slice)]
}