package package1

import "project-demo/package2"

func addThenMinus(num1, num2, num3 int) int {
	return package2.Add(num1,num2) - num3
}

func CalculateNumbers(num1, num2, num3 int) int {
	printSomething()
	return addThenMinus(num1, num2, num3)
}