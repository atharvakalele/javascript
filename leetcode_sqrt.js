var mySqrt = function(x) {
    const binary_search=(x)=>{
        let start=0;let end=x;
        while(start<=end){
            let mid=start+parseInt((end-start)/2);
            if(mid*mid==x)return mid;
            else if(mid*mid>x)end=mid-1;
            else start=mid+1;
        } 
        return end;
    }
    return binary_search(x);
};