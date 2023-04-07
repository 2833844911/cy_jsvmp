function cshduei(){
    this.pop = function (){
        var t
        if (!this.gx[this.s][0]){
            this.gx[this.s][0] = "yhhw"+this.num
            this.gx["yhhw"+this.num] = [undefined, this.s,undefined]
            this.num += 1
        }
        return t = this.gx[this.s][2], this.s = this.gx[this.s][0], this.length -= 1, t;
    }
    this.push = function (a){
        var hu = this.gx[this.s][1];
        if (!hu){
            this.gx["yhh"+this.num] = [this.s, undefined,undefined], hu = "yhh"+this.num,
            this.num += 1
        }
        return this.s = hu, this.gx[this.s][2] = a,this.length += 1, a;
    }
    this.sf = function (){
        var e
        if (this.length < 1){return 10}
        return e = this.gx[this.s][2], this.s = this.gx[this.s][0], this.length--, this.s = this.gx[this.s][1], this.gx[this.s][2] = e,this.length+=1, 101;
    }
    this.shift = function (){
        var sc, h, g = this.s;
        this.length -= 1;
        this.s = this.gx[this.s][0]

        h = this.gx[g][2];
        while (!![]){
            if (g === this.gx["cbb1"][1]){
                break
            }
            sc = this.gx[this.gx[g][0]][2], this.gx[this.gx[g][0]][2] = h,  h = sc,g = this.gx[g][0];
        }
        return h;
    }
    this.gx = CbbTHALLYhh
    this.s = "cbb1"
    this.length = 0
    this.num = 0
}
