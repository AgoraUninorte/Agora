# Load the flextable package
install.packages("flextable")
library(flextable)

# Create a data frame
df <- data.frame(
  name = c("John", "Mary", "Bob"),
  age = c(20, 25, 30)
)

# Create a flextable from the data frame
ft <- flextable(df)



# Print the flextable
print(ft)
