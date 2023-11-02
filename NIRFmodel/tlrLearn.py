import pandas as pd
import numpy as np
import json
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

data = pd.read_csv("dataNIRF.csv") #Idhar tera csv file hai

class Models:
    def fsrModel(Z):
        X = data.iloc[:, 1:4]
        y = data.iloc[:, 31]
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        regressor = LinearRegression()
        regressor.fit(X_train, y_train)
        y_pred = regressor.predict(Z)
        return y_pred

  
    def fsrPredict(params):
        Y = [[params["NT"], params["NP"], params["F"]]]
        score = Models.fsrModel(Y)
        return score[0]

   
    def tlrModel(Z):
        X = data.iloc[:, 31:32]
        print(X)
        y = data.iloc[:, 34]
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        regressor = LinearRegression()
        regressor.fit(X_train, y_train)
        y_pred = regressor.predict(Z)
        return y_pred


 
    def tlrPredict(params):
        Y = [[Models.fsrPredict(params)]]
        score = Models.tlrModel(Y)
        return score[0]
    
    



def main():

    fsr_params = {"NT": 2773, "NP": 696, "F": 919} #Idhar se data model mai jata hai
   
    tlr_params = fsr_params  
    tlr_score = Models.tlrPredict(tlr_params)
    tlr_mse = mean_squared_error([tlr_score], [84.89])
    tlr_r2 = math.sqrt(tlr_mse)


    #Print karke check kar raha hu
   
    print("TLR Score:", Models.tlrPredict(tlr_params)) #yeh andar ka funciton tera tlr score predeict kar rha hai using the data of fsr {Yeh hai tera tlr score as responcse tereko isiko dena hai anurag ko}
    print(type(tlr_score))
    print("TLR MSE:", tlr_mse)
    print("TLR R-squared:", tlr_r2)

if __name__ == "__main__":
    main()
