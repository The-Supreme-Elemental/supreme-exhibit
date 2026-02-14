# # url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/tips.csv"

import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/tips.csv"
df = pd.read_csv(url)

# del df["sex"]
# del df["smoker"]
# del df["day"]
# del df["time"]

# # Inspect Data
# print(df.info())
# print(df.describe())

# # Visualize Distributions
# # sns.histplot(df["total_bill"], kde=True)
# # plt.title("Distribution of Total Bill")
# # plt.show()

# # Correlation Heatmap
# sns.heatmap(df.corr(), annot=True, cmap="coolwarm")
# plt.title("Correlation Heatmap")
# plt.show()

# from scipy.stats import ttest_ind

# # Separate data by gender
# male_tips = df[df["sex"] == "Male"]["tip"]
# female_tips = df[df["sex"] == "Female"]["tip"]

# # Perfrom t-test
# t_stat, p_value = ttest_ind(male_tips, female_tips)
# print(f"T-Statistic: {t_stat}")
# print(f"P-Value: {p_value}")

# # Interpret results
# alpha = 0.05
# if p_value <= alpha:
#     print("Reject all null hypotheses")
# else:
#     print("Failure to reject null hypothesis")

# Define the Variables
X = df["total_bill"].values.reshape(-1, 1)
y = df["tip"].values

# Fit linear Regression
model = LinearRegression()
model.fit(X, y)

# Output the coefficients
print(f"Slope: {model.coef_[0]}")
print(f"Intercept: {model.intercept_}") 
print(f"R-Squared: {model.score(X, y)}")

# Plot Regression
sns.scatterplot(x=df["total_bill"], y=df["tip"], color="blue")
plt.plot(df["total_bill"], model.predict(X), color="red", label="Regression Line")
plt.title("Total Bill vs Tip")
plt.legend()
plt.show()






