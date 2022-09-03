""" FUNCIONES DISPONIBLES EN LA CALCULADORA """
'''
S o s: Suma.
R o r: Resta.
M o M: Multiplicacion.
D o d: Division
'''

""" PASO 1 INDICAR DATOS VARIABLES """
print("Ingresar tu numero a calcular:")


""" NUM1 VARIABLE 1 A CALCULAR"""
num1 = int(input("Numero 1:"))

""" OPCION VARIABLE DEL CALCULO """
opcion = input("Selecciona lo que quieres hacer con el numero:\n\
    S s=Suma\n\
    R r=Resta\n\
    M m=Multiplicacion\n\
    D d=Divicion"
)

""" NUM2 VARIABLE 2 A CALCULAR """
num2 = int(input("Numero 2:"))


""" PASO 2 RALZAR CALCULO CON CONDICIONALES """
opcion = opcion.lower()
res = 0
if opcion == "s":
    res = num1+num2
if opcion == "r":
    res = num1-num2
if opcion == "m":
    res = num1*num2
if opcion == "d":
    if num2 != 0:
        res = num1/num2
else:
    print("No se seleccionaste ninguna opcion matematica 'genio' ")
""" PASO 3 MOSTRAR RESULTADO O EN SU DEFECTO MENSAJE SI HAY ERROR DE VARIABLES """
print(f"El resultado es:{res}")

""" GRACIAS POR LEER """