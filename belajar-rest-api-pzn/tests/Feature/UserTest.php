<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function testRegisterSuccess(): void
    {
        $this->post('api/users', [
            'username' => 'azka17',
            'password' => 'rahasia',
            'name' => 'azka',
        ])->assertStatus(201)->assertJson([
            "data" => [
                'username' => 'azka17',
                'name' => 'azka',
            ]
        ]);
    }

    public function testRegisterFailed(): void
    {
        $this->post('api/users', [
            'username' => '',
            'password' => '',
            'name' => '',
        ])->assertStatus(400)->assertJson([
            "errors" => [
                'username' => [
                    "The username field is required."
                ],
                'password' => [
                    "The password field is required."
                ],
                'name' => [
                    "The name field is required."
                ],
            ]
        ]);
    }

    public function testRegisterUsernameExist(): void
    {
        $this->testRegisterSuccess();
        $this->post('api/users', [
            'username' => 'azka17',
            'password' => 'rahasia',
            'name' => 'azka',
        ])->assertStatus(400)->assertJson([
            "errors" => [
                'username' => [
                    "username already registered"
                ]
            ]
        ]);
    }

    public function tesLoginSuccess(): Void
    {
        $this->seed([UserSeeder::class]);
        $this->post('api/users/login', [
            'username' => 'test',
            'password' => 'test',
        ])->assertStatus(200)->assertJson([
            'data' => [
                'username' => 'test',
                'password' => 'test',
            ]
        ]);

        $user = User::where('username', 'test')->first();
        self::assertNotNull($user->token);
    }

    public function tesLoginFailedUsernameNotFound(): Void
    {
        $this->post('api/users/login', [
            'username' => 'test',
            'password' => 'test',
        ])->assertStatus(401)->assertJson([
            'errors' => [
                'message' => [
                    'username already registered'
                ]
            ]
        ]);
    }

    public function tesLoginFailedPasswordWrong(): Void
    {
        $this->seed([UserSeeder::class]);

        $this->post('api/users/login', [
            'username' => 'test',
            'password' => 'salah',
        ])->assertStatus(401)->assertJson([
            'errors' => [
                'message' => [
                    'username already registered'
                ]
            ]
        ]);
    }

    function testGetSuccess(): Void
    {
        $this->seed([UserSeeder::class]);

        $this->get('api/users/current', [
            'authorization' => 'test'
        ])->assertStatus(200)->assertJson([
            'data' => [
                'username' => 'test',
                'name' => 'test',
            ]
        ]);
    }

    function testGetAuthorized(): Void
    {
        $this->seed([UserSeeder::class]);

        $this->get('api/users/current')->assertStatus(401)->assertJson([
            'errors' => [
                'message' => ['unauthorized'],
            ]
        ]);
    }

    function testGetInvalidToken(): Void
    {
        $this->seed([UserSeeder::class]);

        $this->get('api/users/current', [
            'authorization' => 'salah'
        ])->assertStatus(401)->assertJson([
            'errors' => [
                'message' => ['unauthorized'],
            ]
        ]);
    }

    function testUpdateNameSuccess(): Void
    {
        $this->seed([UserSeeder::class]);
        $oldName = User::where('name', 'test')->first();

        $this->patch('api/users/current', [
            'name' => 'Azka'
        ], [
            'authorization' => 'test'
        ])->assertStatus(200)->assertJson([
            'data' => [
                'username' => 'test',
                'name' => 'Azka',
            ]
        ]);

        $newName = User::where('username', 'test')->first();
        self::assertNotEquals($oldName->name, $newName->name);
    }

    function testUpdatePasswordSuccess(): Void
    {
        $this->seed([UserSeeder::class]);
        $oldPassword = User::where('name', 'test')->first();

        $this->patch('api/users/current', [
            'password' => 'baru'
        ], [
            'authorization' => 'test'
        ])->assertStatus(200)->assertJson([
            'data' => [
                'username' => 'test',
                'name' => 'test',
            ]
        ]);

        $newPassword = User::where('username', 'test')->first();
        self::assertNotEquals($oldPassword->password, $newPassword->password);
    }

    function testUpdateFailed(): Void
    {
        $this->seed([UserSeeder::class]);

        $this->patch('api/users/current', [
            'name' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum illum facere officia sed laboriosam beatae, explicabo vitae labore voluptates tempora magnam rem quos aliquid repellat voluptatem culpa consequatur quod blanditiis, dicta amet! Reprehenderit, dolorem labore odit nesciunt repudiandae ratione ducimus quaerat cum quibusdam, dolorum quos repellat voluptatibus sunt atque veritatis tempora. Quaerat temporibus, consequuntur culpa repellendus itaque, dolore consequatur iusto dolores ducimus optio vel. Repudiandae tempore sit, quisquam necessitatibus tempora maiores molestiae aliquam libero quam temporibus perferendis dolorum consequatur, et enim repellendus nemo optio numquam, magni dolorem incidunt est accusantium qui doloremque a. Nostrum, minus iure enim laborum veritatis ipsum excepturi?'
        ], [
            'authorization' => 'test'
        ])->assertStatus(400)->assertJson([
            'errors' => [
                'name' => [
                    'The name field must not be greater than 100 characters.'
                ]
            ]
        ]);
    }

    function testLogoutSuccess(): Void
    {
        $this->seed([UserSeeder::class]);

        $this->delete('api/users/logout', [null], [
            'authorization' => 'test'
        ])->assertStatus(200)->assertJson([
            'data' => true
        ]);

        $user = User::where('username', 'test')->first();
        self::assertNull($user->token);
    }

    function testLogoutFaild(): Void
    {
        $this->seed([UserSeeder::class]);

        $this->delete('api/users/logout', [null], [
            'authorization' => 'salah'
        ])->assertStatus(401)->assertJson([
            'errors' => [
                'message' => ['unauthorized'],
            ]
        ]);
    }
}
