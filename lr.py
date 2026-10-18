class linearRegression():
    def __init__(self):
        self.slope=None
        self.intercept=None
    def fit(self,x,y,verbose=True):
        n=len(x)
        if n !=len(y):
            raise  ValueError("x and y must have the same values")
        xmean=sum(x)/n
        ymean=sum(y)/n
        variance=sum((x_i-xmean)**2 for x_i in x)
        covariance=sum((x_i -xmean)*(yi-ymean) for x_i,yi in zip(x,y))
        self.slope=covariance/variance
        self.intercept=ymean-(self.slpe*xmean)
        return self
    def predict(self,x):
        if isinstance(x,(list,tuple)):
            return [self.intercept+self.slope*x_i for x_i in x]
        return self.slope*x+self.intercept