function RNA(dna) {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default:
                throw new Error('Invalid DNA strand');
        }
    }
    return rna;
}

function DNA(rna) {
    let dna = '';
    for (let i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'C':
                dna += 'G';
                break;
            case 'G':
                dna += 'C';
                break;
            case 'A':
                dna += 'T';
                break;
            case 'U':
                dna += 'A';
                break;
            default:
                throw new Error('Invalid RNA strand');
        }
    }
    return dna;
}
