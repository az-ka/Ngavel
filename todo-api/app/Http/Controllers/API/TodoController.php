<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use SebastianBergmann\CodeUnit\FunctionUnit;

class TodoController extends Controller
{
    public function index(): JsonResponse
    {
        $todos = Todo::all();

        return $this->sendResponse(TodoResource::collection($todos), 'Todos retrieved successfully.');
    }

    public function store(Request $request): JsonResponse
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required|string|max:255|min:3',
            'description' => 'required|string|max:255|min:3',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $todo = Todo::create($input);

        return $this->sendResponse(TodoResource::collection($todo), 'Todo created successfully.', 201);
    }

    public function update(Request $request, Todo $todo): JsonResponse
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required|string|max:255|min:3',
            'description' => 'required|string|max:255|min:3',
            'completed' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $todo->title = $input['title'];
        $todo->description = $input['description'];
        $todo->completed = $input['completed'];
        $todo->save();

        return $this->sendResponse(TodoResource::collection($todo), 'Todo updated successfully.');
    }
}
