def cakes(recipe, available):
    numpos = 0
    for x in recipe:
        for y in available:
            if (available[y] >= recipe[x]) and (available[y]//recipe[x] < numpos):
                numpos = available[y]//recipe[x]
    return numpos

recipe = {"flour": 500, "sugar": 200, "eggs": 1}
available = {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}
print (cakes(recipe, available))

recipe = {"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}
available = {"sugar": 500, "flour": 2000, "milk": 2000}
print (cakes(recipe, available))