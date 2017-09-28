var canvas;
var context;

window.onload = function() {
      canvas = document.getElementById("drawingCanvas");
      context = canvas.getContext("2d");
       
      // ���������� ��������� ��� ��������� �������
      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
      canvas.onmouseout = stopDrawing;
      canvas.onmousemove = draw;
	  
	  var previousColorElement;


	  
   }
   
   function changeColor(color, imgElement)
{
    // 	������ ������� ���� ���������
	context.strokeStyle = color;
	
	// ������ ����� �������� <img>, �� �������� ��������
	imgElement.className = "Selected";
	
	// ���������� ����� ��������� ������� <img> � ���������� ���������
	if (previousColorElement != null)
	   previousColorElement.className = "";
	   
	previousColorElement = imgElement;
}

var previousThicknessElement;

function changeThickness (thickness, imgElement)
{
    // �������� ������� ������� �����
	context.lineWidth = thickness;
	
	// ������ ����� �������� <img>, �� �������� ��������
	imgElement.className = "Selected";
	
	// ���������� ����� ��������� ������� <img> � ���������� ���������
	if (previousThicknessElement != null)
	   previousThicknessElement.className = "";
	   
	previousThicknessElement = imgElement;
}

function startDrawing(e) {
	// �������� ��������
	isDrawing = true;
	
	// ������� ����� ���� (� ������� ������ � �������� �����) 
	context.beginPath();
	
	// �������� ����� ������ ���� �������� "�����" �� �����
	context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
	if (isDrawing == true)
	{
	  	// ���������� ������� ���������� ��������� ����
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		
		// ������ ����� �� ����� ����������
		context.lineTo(x, y);
		context.stroke();
	}
}

function stopDrawing() {
    isDrawing = false;	
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    // ������� ������� <img>
	var imageCopy = document.getElementById("savedImageCopy");
	
	// ���������� ������ ������ � �������� <img>
	imageCopy.src = canvas.toDataURL();
	
	// ���������� ������� <div>, ����� ����������� �������
	// ����� ����������� �������
	var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}