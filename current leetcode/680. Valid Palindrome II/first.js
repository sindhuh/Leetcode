/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(reverseInteger(s)) {
        return true
    }
    var array = s.split("")
    for(var i = 0; i < array.length; i++) {
        array.splice(i, 1)
        if(reverseInteger(array.join(""))) {
            return true;
        } else {
            array = s.split("")
        }
    }
    return false;
};

function reverseInteger(number) {
    var stringNum = number;
    var start = 0;
    var end = stringNum.length - 1;
    var mid = (start + end ) / 2;
    for(var i = 0 ; i < stringNum.length; i++) {
        if(start === end) {
            return true;
        }
        if(stringNum[start] === stringNum[end]) {
            start = start + 1;
            end = end - 1
        } else {
            return false;
        }
    }
    return true
}

console.log(validPalindrome("vrditzikraudagiukntqmrrrkoundpajepuojyxsmdbuiibhlirwuvnpdsdgikgpfifxlsxffnjoivgyvzryoebgikivmianxrnlijcgfnrpbzvldekeegjkyazyfzxgarinudspvubjwdodggtpzzboetsqkoltvldzccwkfoagponsllaooihbntpciskzumpvixnudlvbusfbupaztalbhhzefvswqaphlvyuzbaskhkrpkrqqzvfkkxvoycyjvjdwgxsogzlkytdfhnmlzeeimreehlzapoxfjuyencmwrvgtujovsmuklanvrqnuykvqheobazsdewoqxsvyuzargcbvrgmytnbwseyucsojvdunoaclqtjkpxoxznzzlwxnnkuebhiticalkkvisjoikujmdrkcyyedxztulteelkwzxyvkazqxkbfdjjmhtcysvmsclrsqsieolslsnzfhcocdokouzvlbqoxmpjnyaibmwzuusgrcmxwyibpnvcparwmtewevoazngulpshvskbtmywmdlpugqefqgtdtejdksaacorrgtuuebqrsmwhwxsfuynuunzykpupjzgeagkwdgxfdbqlcsysjvryevmboyqcsknnmovogzeqipwekwbqifzwdiawiuabehfkhuaelleixyqlpudspilshqeqxtzypldxkknrylfpjxkqtlsoxyjybverwzywwwmuuilfmwdnfcwkdmnricuttgbpgoyxclvasoqhjempozglbzwompqmyrtthadmuftznosmnwghryotbcxlocmnokxlhtgsxlyswrecxzpkbmwgbuskqhugmteaebhvdddqlobiutadyhbkjazhhyahbzlzugqxhdyecdxlxooceverumsrbqlgflqtdgtrbmhoqcvzuxzxxgpceswwbzyecfcyjwpmcphzqonzzcjuyalcriferobtrpflqfjkhrgcknvplausvnlgcotjjtocglnvsualpvnkcgrhkjfqlfprtborefirclayujczznoqzhpcmpwjycfceyzbwwsecpgxxzxuzvcqohmbrtgdtqlfglqbrsmurevecooxlxdceydhxqguzlzbhayhhzajkbhydatuibolqdddvhbeaetmguhqksubgwmbkpzxcerwsylxsgthlxkonmcolxcbtoyrhgwnmsonztfumdahttrymqpmowzblgzopmejhqosavlcxyogpbgttucirnmdkwcfndwmfliuumwwwyzwrevbyjyxosltqkxjpflyrnkkxdlpyztxqeqhslipsduplqyxielleauhkfhebauiwaidwzfiqbwkewpiqezgovomnnkscqyobmveyrvjsysclqbdfxgdwkgaegzjpupkyznuunyufsxwhwmsrqbeuutgrrocaaskdjetdtgqfeqgupldmwymtbksvhsplugnzaovewetmwrapcvnpbiywxmcrgsuuzwmbiaynjpmxoqblvzuokodcochfznslsloeisqsrlcsmvsycthmjjdfbkxqzakvyxzwkleetlutzxdeyyckrdmjukiojsivkklacitihbeuknnxwlzznzxoxpkjtqlcaonudvjoscuyeswbntymgrvbcgrazuyvsxqowedszaboehqvkyunqrvnalkumsvojutgvrwmcneyujfxopazlheermieezlmnhfdtyklzgosxgwdjvjycyovxkkfvzqqrkprkhksabzuyvlhpaqwsvfezhhblatzapubfsubvldunxivpmruzksicptnbhiooallsnopgaofkwcczdlvtlokqsteobzzptggdodwjbuvpsduniragxzfyzaykjgeekedlvzbprnfgcjilnrxnaimvikigbeoyrzvygviojnffxslxfifpgkigdsdpnvuwrilhbiiubdmsxyjoupejapdnuokrrrmqtnkuigaduarkiztidrv"))